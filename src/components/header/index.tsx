import * as Styles from './styled';
import { BsCart4 } from 'react-icons/bs';

export default function HeaderComponent() {
  return (
    <Styles.Header>
      <h1>
        <span>mks</span> Sistemas
      </h1>

      <button>
        <BsCart4 size={22} />0
      </button>
    </Styles.Header>
  );
}
