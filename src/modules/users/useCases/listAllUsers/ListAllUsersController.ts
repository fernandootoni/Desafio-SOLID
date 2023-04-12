import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    // const { user_id } = (request as any).body

    // const user = this.listAllUsersUseCase.execute(user_id)

    return response.status(201).send();
  }
}

export { ListAllUsersController };
