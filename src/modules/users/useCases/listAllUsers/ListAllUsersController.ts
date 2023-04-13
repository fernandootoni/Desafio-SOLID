import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const id = request.headers['user_id']

      const users = this.listAllUsersUseCase.execute({user_id: id.toString()})

      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).json({error: error.message});
    }
  }
}

export { ListAllUsersController };
