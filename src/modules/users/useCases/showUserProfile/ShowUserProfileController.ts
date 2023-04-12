import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = (request as any).body

    const user = this.showUserProfileUseCase.execute(user_id)

    return response.status(201).json(user_id)
  }
}

export { ShowUserProfileController };
