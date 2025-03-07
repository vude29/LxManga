load('config.js');
function execute() {
    return Response.success([
        {title: "Trang chủ", input: BASE_URL, script: "gen.js"}
        {title: "Thể loại", input: BASE_URL + "/tim-truyen", script: "gen.js"}
    ]);
}
