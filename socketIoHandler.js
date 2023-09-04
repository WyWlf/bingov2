// @ts-nocheck
import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);

	let rooms = []
	let players = []
	io.on('connection', (socket) => {
		socket.on('multiplayer-creation', data => {
			if (!rooms.includes(data)){
				rooms.push(data['room'])
				players.push({room: data['room'], host: data['player'], players: [data['player']], lost: [], started: false, ended: false, winner: ''})
			}
		})
		socket.on('join', data => {
			if (rooms.includes(data['room'])){
				let obj = players.find(o => o.room === data['room'])
				if (!obj['players'].includes(data['player']) && !obj['lost'].includes(data['player'])){
					obj['players'].push(data['player'])
					socket.broadcast.emit('new-player', obj)
					socket.emit('room-found', obj)
				} else if (obj['lost'].includes(data['player'])){
					socket.emit('room-found', false)
				}
			} else {
				socket.emit('no-room')
			}
		})
		socket.on('gameInfo', data => {
			let obj = players.find(o => o.room === data)
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
			if (obj['started'] == true && obj['ended'] == false && obj['players'].includes(data['player'])){
				socket.emit('active', obj)
			} else if (!obj['players'].includes(data['player'])) {
				socket.emit('active', false)
			}
		})
		socket.on('player-kick', data => {
			let obj = players.find(o => o.room === data['game'])
			if (obj['players'].includes(data['player'])){
				obj['lost'].push(data['player'])
				let index = obj['players'].indexOf(data['player'])
				obj['players'].splice(index, 1)
			}
			console.log(obj)
		})
		socket.on('disconnected', data => {
			let obj = players.find(o => o.room === data['game'])
			if (obj['players'].includes(data['player'])){
				let index = obj['players'].indexOf(data['player'])
				obj['players'].splice(index, 1)
				socket.broadcast.emit('player-dc', {
					origin: data,
					new: obj
				})
			}
		})
	})
}
