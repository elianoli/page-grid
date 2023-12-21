const GridContent = () => {
    return (<>
    <div className="grid grid-cols-1 bg-gray-200 p-5">
        <div className="bg-blue-500 p-5 rounded-t-xl shadow min-h-[90vh]">home2</div>
        <div className="bg-green-500 p-5 shadow min-h-[110vh]">about me</div>
        <div className="bg-blue-500 p-5 shadow min-h-[110vh]">resume</div>
        <div className="bg-green-500 p-5 shadow min-h-[110vh]">projects</div>
        <div className="bg-blue-500 p-5 shadow min-h-[110vh]">skills</div>
        <div className="bg-green-500 p-5 shadow min-h-[110vh]">contact</div>
        <div className="bg-blue-500 p-5 rounded-b-xl shadow min-h-[30vh]">footer</div>
    </div>
    </>)
}

export default GridContent;