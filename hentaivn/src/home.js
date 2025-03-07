load('config.js');
function execute() {
    return Response.success([
        {title: "Lịch Sử", input: BASE_URL + "/lich-su", script: "gen.js"}
        {title: "Thể loại", input: BASE_URL + "/tim-truyen", script: "gen.js"}
    ]);
}
