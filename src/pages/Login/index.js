import { useState } from 'react'
import {Page} from '../../components/Page'
import { FormControl, PageTitle, FormControlInput, FormControlAction } from '../../globalStyles'
import { Button } from '../../components/Button'
import { IoEyeOff, IoEye } from "react-icons/io5"
import { ButtonIcon } from '../../components/ButtonIcon'

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
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"} />
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEye:IoEyeOff} onPress={tooglePassWordVisible} />
                    </FormControlAction>
                </FormControl>
                <br/>
                <Button label="Ingresa" onPress={() => alert('iniciar sesion')}/>
            </form>
            <br />
            <p>
                ¿Aún no tienes cuenta?
                <br /> 
                <a href='http://localhost:3000/Signup'>Registrate</a>
            </p>
            
        </Page>
    )
};