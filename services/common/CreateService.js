exports.CreateService = async (Request,DataModel)=>{
    try {
        let PostBody = Request.body;
        let data = await DataModel.create(PostBody);
        return {status: "success", data: data}
    }catch (e) {
        return {status: "fail", data: e.toString()}
    }
}