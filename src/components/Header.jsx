import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '10px 20px' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li>Üretken Akademi</li>
          <li>
            <button className='button-31'>Anasayfa</button>
          </li>
          <li><button>Hakkında</button></li>
          <li><button>İletişim</button></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;