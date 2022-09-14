# SMS Handler

## Install

Clonar proyecto:

```
git clone https://github.com/jsalazarv/SMSHandler.git
```

Instalar dependencias:

```
npm install
```

Configurar variables de entorno que solicita el .env.example debes crear un archivo .env y colacar las variables de entorno

```
PORT=5000
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_NUMBER=
```

`TWILIO_NUMBER=` numero telefonico de salida de mensajes proporcionado por Twilio

Nota: Para poder configurar la mensajeria con Twilio puedes crearte una cuenta gratuita aquí: https://www.twilio.com/es-mx/docs/sms

Levantar el proyecto

```
npm run start:dev
```



Si quieres ver en funcionamiento este API en conjunto con un frontend, visita esta url: https://atomic-five.vercel.app/
