import { CharacterList } from '../../components/CharacterList/CharacterList'
import { Input } from 'antd';
import { Button } from 'antd';


const { Search } = Input;

const Characters = () => (

<>
    
        <header>
            <div>
                <h3>Rick & Morty</h3>
            </div>

           <div>
            <Search placeholder="input search text" enterButton="Search" size="normal" />
           </div>

           <div>
            <Button type="primary" href="http://localhost:3000/">Log Out</Button>
           </div>
        
        </header>

        <CharacterList />

    </>    
);

export default Characters;