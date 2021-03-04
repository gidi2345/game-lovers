import './SplashPage.css';
import LottieControl from "../../animations/LoveSlotMachine";

export const Welcome = (props: any) => {
    return <div className="cstyle" >
        <div style={{width:'100%', height:'100%', display: "flex",justifyContent:'center', alignItems:'center', flexDirection: 'column', justifyItems:'center'}}>
            <h1 className="header">GameLover</h1>
            <LottieControl/>
        </div>
    </div>;
}


