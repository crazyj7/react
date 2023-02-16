import { Header } from "semantic-ui-react";
import MyMenu from "./MyMenu";


export default function Top() {
    return (
        <div>
            <div style={{display:"flex", paddingTop:20, paddingLeft:20}}>
                <div style={{flex:"100px 0 0"}}>
                <img src="./image/logo.jpg" 
                style={{width:"100px"}}></img>

                </div>
            <Header as="h1" >벚꽃</Header>

            </div>
            <MyMenu/>
        </div>
    )
}
