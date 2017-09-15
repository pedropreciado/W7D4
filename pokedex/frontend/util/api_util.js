const Util = {
  fetchAllPokemon: () => {
    return $.ajax({
      method: "GET",
      url: "/api/pokemon",
      type: "json"
    });
  },

  fetchSinglePokemon: (id) => {
    return $.ajax({
      method: 'GET',
      url: `/api/pokemon/${id}`,
      type: 'json'
    });
  },
};
export default Util;
