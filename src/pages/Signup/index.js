import {Page} from '../../components/Page'
import { FormControl, FormControlInput, PageTitle, FormControlAction } from '../../globalStyles';
import { Button } from '../../components/Button'
import { IoEyeOff } from "react-icons/io5"
import { ButtonIcon } from '../../components/ButtonIcon'
import { useState } from 'react';

export const Signup = () => {

    const [visiblePass, setVisiblePass] = useState(false);

    const tooglePassWordVisible = () => {
        setVisiblePass(!visiblePass)
    }

    return (
        <Page>
            <PageTitle>Registrese</PageTitle>
            <br />
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Nombres</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Apellidos</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electronico</label>
                        <input type="email" />
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Identificacion</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Celular</label>
                        <input type="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
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
                <FormControl>
                    <FormControlInput>
                        <FormControlAction>
                            <label>Verificación de contraseña</label>
                            <input type={visiblePass ? "text" : "password"}/>
                        </FormControlAction>
                    </FormControlInput>
                </FormControl>
            </form>
            <br/>
            <Button label="Registrarse" onPress={() => alert('Registrado exitosamente')}/>
           
        </Page>        
    )
};