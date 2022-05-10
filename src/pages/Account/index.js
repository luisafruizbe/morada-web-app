import { Button } from '../../components/Button';
import {Page} from '../../components/Page'
import { PageTitle, FooterFixed} from '../../globalStyles'

export const Account = () => {

    const isAuth = true;

    const UserInfo = () => (
        <div>
            <h3>Luisa</h3>
            <h3>3334445555</h3>
            <h3>luisafruizbe@outlook.com</h3>
            <hr/>
            <FooterFixed>
            <Button 
                label="Cerrar sesión" 
                onPress={ () => {alert('cerrar sesión')}}
            />
            </FooterFixed>
        </div>
    )

    const UserUnauthorized = () => (
        <div>
            <h2>No estas autenticado</h2>
            <p>Para acceder a tu perfil de usuario debes iniciar sesion</p>
            <hr />
            <Button label="Iniciar Sesión" linkTo="/login" />
        </div>
    )
    return (
        <Page>
            <PageTitle>Mi cuenta</PageTitle>
            {
                isAuth ? <UserInfo/>:<UserUnauthorized/>
            }
        </Page>
    )
};
    
