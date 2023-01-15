import { Response, Request, NextFunction } from "express";
import Error from "../interfaces/error_interface";

const errormiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || "Whoops something wrong";
    res.status(status).json({status, message});
}

export default errormiddleware;