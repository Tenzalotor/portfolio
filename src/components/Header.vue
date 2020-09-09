<template>
    <header>
        <div class="header-logo">
            Портфолио
        </div>
        <nav>
            <ul>
                <router-link 
                    to="/" 
                    class="header-nav-link" 
                    tag="li"
                    activeClass="active" 
                    exact><a>Главная</a></router-link>
                <router-link 
                    to="/samples" 
                    class="header-nav-link" 
                    tag="li"
                    activeClass="active"><a>Примеры работ</a></router-link>
                <router-link 
                    to="/offer" 
                    class="header-nav-link" 
                    tag="li"
                    activeClass="active"><a>Оставить заявку</a></router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        padding-right: 1em;
        padding-left: 1em;
    }
    nav ul {
        display: flex;
    }
    .header-nav-link {
        list-style-type: none;
        padding: 0 1em 0 1em;
    }
    .header-nav-link a {
        text-decoration: none;
    }
    .header-nav-link a:visited {
        color: black;
    }
    .active {
        border: 1px solid black;
        border-radius: 5px;
        background-color: #fff;
        opacity: 0.5;
    }
</style>