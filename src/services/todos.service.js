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
  post: async () => {
    const { data } = await httpservice.post(todosEndPoint, {
      title: "New Task",
      completed: false,
    });

    return data;
  },
};
export default todosService;
