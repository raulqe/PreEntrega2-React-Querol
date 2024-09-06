

export const ItemListContainer=({mesage,logo})=>{

    return(
        <>
        <h1 className="GreetingTitle d-flex justify-content-center text-align-center align-items-center ">
        <img  className=" logo logoTitle me-2"src={logo} alt=""/> 
            {mesage}
            <img  className=" logo logoTitle ms-2"src={logo} alt=""/>
        </h1> 
        </>
    );
    }