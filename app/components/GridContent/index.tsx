const GridContent = () => {
    return (<>
    <div className="grid grid-cols-1 bg-gray-200 p-5">
        <div className="flex justify-center items-center min-h-[90vh] p-10 bg-blue-500 rounded-t-xl shadow">home</div>
        <div className="flex justify-center items-center min-h-[90vh] p-10 bg-green-500 rounded-t-xl shadow">about me</div>
        <div className="flex justify-center items-center min-h-[100vh] p-10 bg-blue-500 rounded-t-xl shadow">resume</div>
        <div className="flex justify-center items-center min-h-[90vh] p-10 bg-green-500 rounded-t-xl shadow">projects</div>
        <div className="flex justify-center items-center min-h-[100vh] p-10 bg-blue-500 rounded-t-xl shadow">skills</div>
        <div className="flex justify-center items-center min-h-[90vh] p-10 bg-green-500 rounded-t-xl shadow">contact</div>
        <div className="flex justify-center items-center min-h-[30vh] p-10 bg-blue-500 rounded-t-xl shadow">footer</div>
    </div>
    </>)
}

export default GridContent;