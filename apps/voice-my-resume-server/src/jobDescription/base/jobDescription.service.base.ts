/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, JobDescription as PrismaJobDescription } from "@prisma/client";

export class JobDescriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JobDescriptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jobDescription.count(args);
  }

  async jobDescriptions(
    args: Prisma.JobDescriptionFindManyArgs
  ): Promise<PrismaJobDescription[]> {
    return this.prisma.jobDescription.findMany(args);
  }
  async jobDescription(
    args: Prisma.JobDescriptionFindUniqueArgs
  ): Promise<PrismaJobDescription | null> {
    return this.prisma.jobDescription.findUnique(args);
  }
  async createJobDescription(
    args: Prisma.JobDescriptionCreateArgs
  ): Promise<PrismaJobDescription> {
    return this.prisma.jobDescription.create(args);
  }
  async updateJobDescription(
    args: Prisma.JobDescriptionUpdateArgs
  ): Promise<PrismaJobDescription> {
    return this.prisma.jobDescription.update(args);
  }
  async deleteJobDescription(
    args: Prisma.JobDescriptionDeleteArgs
  ): Promise<PrismaJobDescription> {
    return this.prisma.jobDescription.delete(args);
  }
}
