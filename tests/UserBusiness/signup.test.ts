import { UserBusiness } from "../../src/business/UserBusiness";
import { SignupInputDTO } from "../../src/dtos/userDTO";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testa a signup", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar um token para usuário normal", async () => {
        const input: SignupInputDTO = {
            name:"testador",
            email:"testador@email.com",
            password:"bananinha"
        }

        const result = await userBusiness.signup(input)

        expect(result.token).toEqual("token-mock-normal")
    })
})