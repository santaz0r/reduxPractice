import httpservice from "./http.service";
const todosEndPoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpservice.get(todosEndPoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpservice.post(todosEndPoint, payload);

    return data;
  },
};
export default todosService;
