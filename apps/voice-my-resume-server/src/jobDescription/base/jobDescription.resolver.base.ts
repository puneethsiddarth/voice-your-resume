/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { JobDescription } from "./JobDescription";
import { JobDescriptionCountArgs } from "./JobDescriptionCountArgs";
import { JobDescriptionFindManyArgs } from "./JobDescriptionFindManyArgs";
import { JobDescriptionFindUniqueArgs } from "./JobDescriptionFindUniqueArgs";
import { CreateJobDescriptionArgs } from "./CreateJobDescriptionArgs";
import { UpdateJobDescriptionArgs } from "./UpdateJobDescriptionArgs";
import { DeleteJobDescriptionArgs } from "./DeleteJobDescriptionArgs";
import { JobDescriptionService } from "../jobDescription.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JobDescription)
export class JobDescriptionResolverBase {
  constructor(
    protected readonly service: JobDescriptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "read",
    possession: "any",
  })
  async _jobDescriptionsMeta(
    @graphql.Args() args: JobDescriptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [JobDescription])
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "read",
    possession: "any",
  })
  async jobDescriptions(
    @graphql.Args() args: JobDescriptionFindManyArgs
  ): Promise<JobDescription[]> {
    return this.service.jobDescriptions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JobDescription, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "read",
    possession: "own",
  })
  async jobDescription(
    @graphql.Args() args: JobDescriptionFindUniqueArgs
  ): Promise<JobDescription | null> {
    const result = await this.service.jobDescription(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobDescription)
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "create",
    possession: "any",
  })
  async createJobDescription(
    @graphql.Args() args: CreateJobDescriptionArgs
  ): Promise<JobDescription> {
    return await this.service.createJobDescription({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobDescription)
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "update",
    possession: "any",
  })
  async updateJobDescription(
    @graphql.Args() args: UpdateJobDescriptionArgs
  ): Promise<JobDescription | null> {
    try {
      return await this.service.updateJobDescription({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JobDescription)
  @nestAccessControl.UseRoles({
    resource: "JobDescription",
    action: "delete",
    possession: "any",
  })
  async deleteJobDescription(
    @graphql.Args() args: DeleteJobDescriptionArgs
  ): Promise<JobDescription | null> {
    try {
      return await this.service.deleteJobDescription(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
