import React from 'react';
import './styles.css';

function NewHome() {
  return (
    <div>
        <header className='newHome__header'>
            <div>
                <h1>Comission</h1>
                <form action="">
                    <input placeholder='Search' type="text" />
                </form>
                <nav>
                    <ul>
                        <li>
                            <img src="#" alt="#" />
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <img src="#" alt="#" />
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <img src="#" alt="#" />
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <img src="#" alt="#" />
                            <a href="#">Logout</a>
                        </li>
                        <li>
                            <img src="#" alt="#" />
                            <a href="#">Post a job</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main className='newHome__container'>
            <section className='newHome__leftBar'>

            </section>
            <section className='newHome__content'>

            </section>
            <aside className='newHome__rightBar'>

            </aside>
        </main>
    </div>
  )
}

export default NewHome;
