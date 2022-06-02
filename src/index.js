import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';
import imgPolat from './images/polat.PNG';
import imgMemati from './images/memati.PNG';
import imgAbdülhey from './images/apdülhey.PNG';

const App = () => {
    return (

        <div className="container">
             <h1 style={{textAlign:"center",margin:"25px 0"}}>Kurtlar Vadisi Karakterleri</h1>
            <div className="row">
                <div className="card-group w-100">
                    
                    <div className="col">

                       

                        <Collapse href="collapseExample1" nameCharacter="Memati Baş">
                            <Card cardTitle="Memati Baş"
                                cardText="Memati Baş, Kurtlar Vadisi serisinin kurgusal karakterlerinden biridir.Polat Alemdarın sağ koludur."
                                updatedTime="30.05.2022"
                                image={imgMemati}
                            />
                        </Collapse>

                    </div>
                    <div className="col">

                        <Collapse href="collapseExample2" nameCharacter="Polat Alemdar">
                            <Card cardTitle="Polat Alemdar"
                                cardText="Efe Yakup Karahanlı, Ali Candan ya da bilinen adıyla Polat Alemdar Kurtlar Vadisi serisinin ana karakteridir."
                                updatedTime="30.05.2022"
                                image={imgPolat}
                            />
                        </Collapse>

                    </div>
                    <div className="col">

                        <Collapse href="collapseExample3" nameCharacter="Abdülhey Çoban">
                            <Card cardTitle="Abdülhey Çoban"
                                cardText=" Kurtlar Vadisi serisinde Kenan Çoban tarafından canlandırılmış kurgusal karakter.Polat Alemdarın sağ koludur."
                                updatedTime="30.05.2022"
                                image={imgAbdülhey}
                            />
                        </Collapse>

                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)