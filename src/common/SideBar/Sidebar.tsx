import React,{useEffect,useState} from 'react'
import './Sidebar.scss'
const SideBar = ()=>{
    const [active, setActive] = useState<boolean>(false)  
    const [activeClass, setActiveClass] =useState<string>("");
    useEffect(() => {
        if(active){
            setActiveClass("active")
        }else{
            setActiveClass("")
        }
    }, [active])
    return (  
    <div className={`sidebar ${activeClass}`} >
    <div className="logo_content">
      <div className="logo">
        <div className="logo_name">MAIN MENU</div>
      </div>
      <button onClick={()=>setActive(!active)}>ok</button>
    </div>
    <ul className="nav_list">
      <li>
        <a href="#">
            
          <i className='bx bx-grid-alt' ></i>
          <span className="links_name">Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
         
          <span className="links_name">Configurations</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-chat' ></i>
          <span className="links_name">Tenants</span>
        </a>
       
      </li>
      <li>
        <a href="#">
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="links_name">Zoom Channels</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-folder' ></i>
          <span className="links_name">Groups</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className='bx bx-user' ></i>
          <span className="links_name">Users</span>
        </a>
        </li>
      
    </ul>
  </div>)
}

export default SideBar