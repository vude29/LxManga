load('config.js');
function execute() {
    return Response.success([
        { title: "Cập Nhật", input: BASE_URL + "/", script: "gen.js" },
        { title: "Manhwa", input: BASE_URL + "/genre/manhwa", script: "gen.js" },
        { title: "Loạn luân", input: BASE_URL + "/genre/loan-luan", script: "gen.js" },
        { title: "loli", input: BASE_URL + "/genre/loli", script: "gen.js" },
    ]);
}
