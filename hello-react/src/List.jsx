import React, { Component } from "react";
import Images from './Images';

class List extends Component {

    render(){
        return(
            <div>
                <ol>
                    <li>1 <Images linkgambar = "https://foto.co.id/wp-content/uploads/2016/12/Teknik-foto-makanan.jpg" /></li>
                    <li>2 <Images linkgambar = "https://www.harapanrakyat.com/wp-content/uploads/2023/06/Asal-usul-Seblak.jpg" /></li>
                    <li>3 <Images linkgambar = "https://1.bp.blogspot.com/-d_s3r4UNSUk/Uk1vu2EsWnI/AAAAAAAAAao/gyfpgfo3CPU/s1600/Sate+Kambing.jpg" /></li>
                    <li>4 <Images linkgambar = "https://jasafotojakarta.com/wp-content/uploads/IMG_0150.jpg" /></li>
                </ol>
            </div>
        );
    }
}

export default List;