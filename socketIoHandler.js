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
				players.push({room: data['room'], host: data['player'], players: [data['player']], started: false, ended: false, winner: ''})
			}
		})
		socket.on('join', data => {
			if (rooms.includes(data['room'])){
				let obj = players.find(o => o.room === data['room'])
				if (!obj['players'].includes(data['player'])){
					obj['players'].push(data['player'])
					socket.broadcast.emit('new-player', obj)
				}
				socket.emit('room-found', obj)
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
			console.log(obj)
			socket.broadcast.emit('chicken-dinner', obj)
		})
		socket.on('reconnect', data => {
			let obj = players.find(o => o.room === data['game'])
		})
	})
	setInterval(() => {
		console.log(players)
	}, 5000);
}
