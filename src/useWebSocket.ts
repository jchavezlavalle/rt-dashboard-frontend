import { useEffect, useRef, useState } from "react";

export interface Metric {
    timestamp: string;
    value: number;
}

export function useWebSocket(url: string) {
    const [data, setData] = useState<Metric[]>([]);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        function connect() {
            ws.current = new WebSocket(url);
            ws.current.onopen = () => {
                console.log("WebSocket connected");
            };

            ws.current.onmessage = (event) => {
                const metric: Metric = JSON.parse(event.data);
                setData((prev) => [...prev.slice(-99), metric]);
            }
            ws.current.onclose = () => {
                console.log("WebSocket closed, reconnecting...");
                setTimeout(connect, 1000);
            }
        }
        connect();

        return () => {
            ws.current?.close();
        };
    }, [url]);
    
    return data;
}