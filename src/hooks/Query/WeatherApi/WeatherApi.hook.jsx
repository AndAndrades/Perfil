import { useQuery } from "@tanstack/react-query";
import { WEATHER_API_ENDPOINT } from "../../../api/weatherAPi";
import apiService from "../../../api/apiService";

const access_key = import.meta.env.VITE_WEATHER_API_KEY;
const url = "http://api.weatherstack.com";

export const ObtenerTiempoActual = (query, props = {}) => {
    return useQuery({
        queryKey: ['weather', query],
        queryFn: () =>
            apiService.get(`${url}${WEATHER_API_ENDPOINT.ACTUAL}`, {
                params: {
                    query,
                    access_key,
                },
            }),
        staleTime: 1000 * 60 * 5,
        retry: 1,
        enabled: !!access_key,
        ...props,
    });
};