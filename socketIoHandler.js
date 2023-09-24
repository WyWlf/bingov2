// @ts-nocheck
import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);

	let rooms = []
	let players = []
	let score = []
	io.on('connection', (socket) => {
		socket.on('multiplayer-creation', data => {
			if (!rooms.includes(data)) {
				rooms.push(data['room'])
				players.push({
					room: data['room'],
					host: data['player'],
					spectate: data['spectate'],
					players: [data['player']],
					origin_player: [data['player']],
					lost: [],
					started: false,
					ended: false,
					winner: '',
					correct: 0,
					wrong: 0,
					combo: 0,
				})
				score.push({
					room: data['room'],
					[data['player']]: []
				})
			}
		})
		socket.on('join', data => {
			if (rooms.includes(data['room'])) {
				let obj = players.find(o => o.room === data['room'])
				let scoreObj = score.find(o => o.room === data['room'])
				if (obj != null && !obj['players'].includes(data['player']) && !obj['lost'].includes(data['player'])) {
					if (!obj['origin_player'].includes(data['player'])) {
						obj['players'].push(data['player'])
						obj['origin_player'].push(data['player'])
						scoreObj[data['player']] = []
						socket.emit('player-scores', scoreObj)
						socket.broadcast.emit('new-player', obj)
						socket.emit('room-found', obj)
					} else {
						obj['players'].push(data['player'])
						socket.broadcast.emit('new-player', obj)
						socket.emit('room-found', obj)
						console.log(obj)
					}
				} else if (obj != null && obj['players'].includes(data['player'])) {
					socket.broadcast.emit('new-player', obj)
					socket.emit('room-found', obj)
				}
				else if ((obj != null && obj['lost'].includes(data['player']) || obj['ended'] == true)) {
					socket.emit('room-found', false)
				}
			} else {
				socket.emit('no-room')
			}
		})
		socket.on('gameInfo', data => {
			let obj = players.find(o => o.room === data)
			let player_sc = score.find(o => o.room === data)
			socket.emit('player-scores', player_sc)
			socket.emit('gameInfoRes', obj)
		})
		socket.on('game-start', data => {
			let obj = players.find(o => o.room === data)
			obj['started'] = true
			socket.broadcast.emit('begin', obj)
		})
		socket.on('winner', data => {
			let obj = players.find(o => o.room === data['game'])
			obj['ended'] = true
			obj['winner'] = data['winner']
			socket.broadcast.emit('chicken-dinner', obj)
		})
		socket.on('reconnect', data => {
			let obj = players.find(o => o.room === data['game'])
			let player_sc = score.find(o => o.room === data['game'])
			if (obj != null && obj['started'] == true && obj['ended'] == false && obj['origin_player'].includes(data['player']) && obj['players'].includes(data['player'])) {
				socket.emit('player-scores', player_sc)
				socket.emit('active', obj)
			}
			if (obj != null && obj['started'] == true && obj['ended'] == false && obj['origin_player'].includes(data['player']) && !obj['players'].includes(data['player'])) {
				obj['players'].push(data['player'])
				socket.broadcast.emit('new-player', obj)
				socket.emit('active', obj)
			}
			else if (obj != null && obj['origin_player'].includes(data['player']) && !obj['players'].includes(data['player'])) {
				obj['players'].push(data['player'])
				socket.broadcast.emit('new-player', obj)
			}
			else if (obj != null && obj['started'] == true && obj['origin_player'].includes(data['player']) && obj['players'].includes(data['player'])) {
				socket.emit('active', obj)
			}
			else if (obj != null && obj['ended'] == true) {
				socket.emit('active', false)
			}
		})
		socket.on('player-kick', data => {
			let obj = players.find(o => o.room === data['game'])
			if (obj != null && obj['players'].includes(data['player'])) {
				obj['lost'].push(data['player'])
				let index = obj['players'].indexOf(data['player'])
				obj['players'].splice(index, 1)
				socket.broadcast.emit('player-reduced', {
					new: obj,
					lost: data['player']
				})
			}
		})
		socket.on('disconnected', data => {
			let obj = players.find(o => o.room === data['game'])
			if (obj != null && obj['origin_player'].includes(data['player'])) {
				let index = obj['players'].indexOf(data['player'])
				obj['players'].splice(index, 1)
				socket.broadcast.emit('player-dc', {
					origin: data,
					new: obj
				})
			}
		})
		socket.on('correct', data => {
			let obj = players.find(o => o.room === data['game'])
			let player_sc = score.find(o => o.room === data['game'])
			if (obj != null && obj['origin_player'].includes(data['player']) && data['answer'] != null) {
				player_sc[data['player']].push(data['answer'])
				socket.broadcast.emit('player-scores', player_sc)
			} else {
				socket.broadcast.emit('player-scores', player_sc)
			}
		})
		socket.on('reset', data => {
			let obj = players.find(o => o.room === data['game'])
			let player_sc = score.find(o => o.room === data['game'])
			if (obj != null && obj['origin_player'].includes(data['player'])) {
				player_sc[data['player']] = []
				socket.broadcast.emit('player-scores', player_sc)
			}
		})

		socket.on('winner-info', data => {
			let obj = players.find(o => o.room === data['game'])
			if (obj != null && obj['ended'] == true && obj['winner'] == data['player']){
				obj['wrong'] = data['wrong']
				obj['correct'] = data['correct']
				obj['combo'] = data['streak']
				socket.broadcast.emit('gameInfoRes', obj)
			}
		})

		socket.on('spectateInfo', data => {
			let obj = players.find(o => o.room === data['room'])
			if (obj != null){
				obj['spectate'] = data['spectate']
				socket.emit('gameInfoRes', obj)
			}
		})
	})
}
