Para iniciar um projeto node express
	npm init
	npm install express
	npm install mysql2
	npm install nodemon
	
Adicione o "type": "module", no package.json

Crie um script no package.json assim:
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"dev": "nodemon ./src/index.js"
	}