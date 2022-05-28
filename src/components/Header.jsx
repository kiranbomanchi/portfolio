import React, { useState,useEffect }  from 'react'
import Typical from "react-typical";
import Switch from "react-switch";


function Header(props) {
  
    let {sharedData} = props
    // console.log(sharedData,"sharedData")
    let titles=sharedData?.basic_info.titles?.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    // console.log(titles,"titles")
    let name =sharedData.basic_info.name
    // console.log(name,"name")
    const [checked,setChecked] = useState(false);

    const   setTheme=()=> {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
          body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
      }
    

    const onThemeSwitchChange=(checked)=>{
        setChecked(checked)
        setTheme()
    }

  
  const HeaderTitleTypeAnimation = React.memo( () => {
    return <Typical className="title-styles" steps={titles} loop={50} />
  }, (props, prevProp) => true);


  return (
     <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header