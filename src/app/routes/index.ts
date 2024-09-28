import { Router  } from "express";
import { UserRoutes } from "../module/users/user.routs";
const router = Router();
const moduleRoutes=[
    {   path: '/users',
        route: UserRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;