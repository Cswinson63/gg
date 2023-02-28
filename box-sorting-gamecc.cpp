#game-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.belt {
	display: flex;
	align-items: center;
	position: relative;
	width: 800px;
	height: 200px;
	background-color: #ccc;
	border: 2px solid #000;
}

.box {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100px;
	height: 100px;
	background-color: #333;
	border-radius: 5px;
	cursor: pointer;
}

.box[data-type="left"] {
	left: 0;
}

.box[data-type="right"] {
	right: 0;
}
