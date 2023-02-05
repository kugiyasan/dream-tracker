import { ProjectService } from '@app/services/project.service';
import { Post, Project } from '@app/types';
import { Request, Response, Router } from 'express';
import { Service } from 'typedi';

const HTTP_STATUS_CREATED = 201;

@Service()
export class ProjectController {
    router: Router;

    constructor(private readonly projectService: ProjectService) {
        this.configureRouter();
    }

    private configureRouter(): void {
        this.router = Router();

        /**
         * @swagger
         *
         * definitions:
         *   Project:
         *     type: object
         *     properties:
         *       id:
         *         type: string
         *       name:
         *         type: string
         *       description:
         *         type: string
         */

        /**
         * @swagger
         * tags:
         *   - name: Project
         *     description: Project endpoints
         */

        /**
         * @swagger
         *
         * /api/project:
         *   get:
         *     description: Return all projects
         *     tags:
         *       - Project
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         schema:
         *           $ref: '#/definitions/Project'
         */
        this.router.get('/', (req: Request, res: Response) => {
            const projects = this.projectService.getAllProjects();
            res.json(projects);
        });

        this.router.post('/', (req: Request, res: Response) => {
            const project: Project = req.body;
            this.projectService.addProject(project);
            res.sendStatus(HTTP_STATUS_CREATED);
        });

        this.router.patch('/addPost/:id', (req: Request, res: Response) => {
            const id: string = req.params.id;
            const post: Post = req.body;
            const result = this.projectService.addPost(id, post);
            res.json(result);
        });
    }
}
