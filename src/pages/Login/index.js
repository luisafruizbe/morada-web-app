import {Page} from '../../components/Page'
import { FormControl, PageTitle, FormControlInput, FormControlAction } from '../../globalStyles'
import { Button } from '../../components/Button'
import { IoEyeOff } from "react-icons/io5"
import { ButtonIcon } from '../../components/ButtonIcon'
import { useState } from 'react'

export const Login = () => {

    const [visiblePass, setVisiblePass] = useState(false);
 
    const tooglePassWordVisible =() => {
        setVisiblePass(!visiblePass)
    }

    return (
        <Page hideMenu>
            <PageTitle>Iniciar sesión</PageTitle>
            <br/>
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electronico</label>
                        <input type="email" />
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <FormControlAction>
                            <label>Contraseña</label>
                            <input type={visiblePass ? "text" : "password"} />
                        </FormControlAction>
                    </FormControlInput>
                    <div>
                        <ButtonIcon icon={IoEyeOff} onPress={tooglePassWordVisible} />
                    </div>
                </FormControl>
                <br/>
                <Button label="Ingresa" onPress={() => alert('iniciar sesion')}/>
            </form>
            <br />
            <p>
                ¿Aun no tienes cuenta?
                <br /> 
                <a href='http://localhost:3000/Signup'>Registrate</a>
            </p>
            
        </Page>
    )
};