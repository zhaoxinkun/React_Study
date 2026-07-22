import ipadPro from "~img/store-card-ipad-pro.jpeg"
import "./index.css" //使用外部样式
import styles from "./product.module.css" //使用模块化样式
import styled from "styled-components"; //使用css-in-js方案


const StyledProductContainer = styled.div`
    max-width: 28rem;
    position: relative;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`


export default function Product() {

    // 使用内部样式--图片样式
    const imgStyle = {
        height: "auto",
        width: "100%",
        borderRadius: "0.5rem",
    }
    return (
        <>
            {/*外部容器*/}
            {/*<div style={{maxWidth: "28rem", position: "relative"}}>*/}
            {/*    <img src={ipadPro} alt="iPad Pro" style={imgStyle}/>*/}
            {/*    <div className={styles.productTextContainer}>*/}
            {/*        <div className={styles["product-title"]}>iPad Pro</div>*/}
            {/*        <div className={"product-detail"}>磅礴的薄 RMB 9999 起</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <StyledProductContainer>
                <img src={ipadPro} alt="iPad Pro" style={imgStyle}/>
                <div className={styles.productTextContainer}>
                    <div className={styles["product-title"]}>iPad Pro</div>
                    <div className={"product-detail"}>磅礴的薄 RMB 9999 起</div>
                </div>
            </StyledProductContainer>

        </>
    );
}
