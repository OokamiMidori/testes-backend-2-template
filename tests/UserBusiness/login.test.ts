import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    
    test("Deve retornar um token para usuário normal", async () => {
        const input:LoginInputDTO = {
            email: "normal@email.com",
            password:"bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response).toEqual({token: "token-mock-normal"})
    })
    
    test("Deve retornar um token para usuário admin", async () => {
        const input:LoginInputDTO = {
            email: "admin@email.com",
            password:"bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response).toEqual({token: "token-mock-admin"})
    })
})