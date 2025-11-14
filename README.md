# Real-time WebSockets Metrics Dashboard
This project was made using React + Vite + Typescript and allows the visualization of CPU metrics triggered from the backend side using WebSockets in [this repo](https://github.com/jchavezlavalle/rt-stream-dashboard) 

## Setup

Before running the app make sure to install all dependencies with:
```
npm i
```
Use of node version 20 is strongly adviced.

## Run the app

Start the project by running the command:
```
npm run dev
```

Remember to have opened another terminal and run the backend here -> [https://github.com/jchavezlavalle/rt-stream-dashboard](https://github.com/jchavezlavalle/rt-stream-dashboard)

You will see the following graph being completed in real time coming from the traffic triggered by the backend:

![Real-time Streaming Dashboard UI](<Captura desde 2025-11-14 22-45-07.png>)

If you hover a value in the chart you can also see displayed the specific value on a tooltip:

![See a specific value](<Captura desde 2025-11-14 22-45-48.png>)



