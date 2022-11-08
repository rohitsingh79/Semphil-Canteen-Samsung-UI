
function Image ({src , imageWidth='100px' , imageHeight = '100px'}) {

    return (
        <img src = {src} style = {{width:imageWidth , height:imageHeight , borderRadius:'20%'}} alt = 'image'></img>
    )

}
export default Image;