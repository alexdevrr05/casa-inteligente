# Smart House

## _Monitores de sensores_

<a href="https://www.facebook.com/TSJVallarta"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/TSJZapopan_Logo.jpg" alt="Build Status" width="200" height="200"></a>

App de monitoreo de sensores y actuadores en una casa habitación. 🏠🤖

- Temperatura
- Movimiento
- Proximidad
- ✨Magia ✨

## Caracterísiticas

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Smart House
- Export documents as Markdown, HTML and PDF

> Controlar,
> Monitorear,
> Estadísticas

## Tecnología

Smart House utiliza varios proyectos de código abierto para funcionar correctamente:

- [React JS] - React mejora las aplicaciones web!
- [Vite] - Herramienta de compilación web rápida para el desarrollo de aplicaciones web modernas.
- [Arduino] - Plataforma de desarrollo de hardware libre
- [Firebase] - Base de datos NoSQL alojada en la nube.
- [node.js] - Entorno de ejecución de JavaScript en el servidor

Y por supuesto Smart House es de código abierto con un [Repositorio público][smarthouse]
on GitHub.

## Installation

Smart House requires [Node.js](https://nodejs.org/) v19.4.0+ to run and.

Install the dependencies and devDependencies and start the server.

```sh
yarn
yarn dev
```

For production environments...

```sh
yarn install --production
NODE_ENV=production node app
```

## Plugins

Smart House is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][PlDb]         |
| GitHub           | [plugins/github/README.md][PlGh]          |
| Google Drive     | [plugins/googledrive/README.md][PlGd]     |
| OneDrive         | [plugins/onedrive/README.md][PlOd]        |
| Medium           | [plugins/medium/README.md][PlMe]          |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Smart House uses Vite + Docker for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

## Docker

Smart House is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd Smart House
docker build -t <youruser>/Smart House:${package.json.version} .
```

This will create the Smart House image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Smart House.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=Smart House <youruser>/Smart House:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[smart-house]: <https://github.com/joemccann/Smart House>
[git-repo-url]: <https://github.com/joemccann/Smart House.git>
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[Ace Editor]: http://ace.ajax.org
[Vite]: https://vitejs.dev/
[Firebase]: https://firebase.google.com/?hl=es
[smarthouse]: https://github.com/alexdevrr05/smart-house
[React JS]: https://es.react.dev/
[Arduino]: https://www.arduino.cc/
[node.js]: https://nodejs.org/es/
[PlDb]: <https://github.com/joemccann/Smart House/tree/master/plugins/dropbox/README.md>
[PlGh]: <https://github.com/joemccann/Smart House/tree/master/plugins/github/README.md>
[PlGd]: <https://github.com/joemccann/Smart House/tree/master/plugins/googledrive/README.md>
[PlOd]: <https://github.com/joemccann/Smart House/tree/master/plugins/onedrive/README.md>
[PlMe]: <https://github.com/joemccann/Smart House/tree/master/plugins/medium/README.md>
[PlGa]: <https://github.com/RahulHP/Smart House/blob/master/plugins/googleanalytics/README.md>