import { createGlobalStyle } from "styled-components";

const MainCommonStyles = createGlobalStyle`
    
    .tabBtn{
        *{
            border-radius: 4px;
            box-shadow: 0 8px 16px 0 rgba(15,41,77,.08);
            color: #0f294d;
            padding: 8px 16px;
            cursor: pointer;
            margin-right: 16px;
        }
        *.active{
            color: #fff;
            background-color: #0f294d;
        }
    }
    .contentsBg{
        overflow: hidden;
        padding: 24px;
        border-radius: 8px;
        background: no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(204,230,255,.72),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(204,230,255,.72),transparent),#f7fafc;    
    }
    .contentsBg.st2{
        background:  no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(255,233,236,.6),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(255,233,236,.6),transparent),#fcf9f6;
    }
    .contentsBg.st3{
        background: no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(122,226,211,.28),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(122,226,211,.28),transparent),#f7fafc;
    }
    
    .roundBoxs{
        display: inline-flex;
        *{
            border-radius: 8px;
            box-shadow: 0 8px 16px 0 rgba(15,41,77,.08);
            background: #fff;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            transform: translateZ(0);
        }
    }
`;

export default MainCommonStyles;
