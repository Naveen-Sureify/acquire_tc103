import {
  ApplicationFormat,
  ApplicationRasInputJson,
  ApplicationSchema,
  ApplicationTemplate,
  ApplicationTransmissionFormat,
  compile,
} from '@sureifylabs/xml';
import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Query,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { fromXML } from 'from-xml';
import { ApplicationRas } from '@sureifylabs/acquire-models';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  // GET /api/v1/applications/:id?schema=tc103&format=xml&template=TC103
  @Get(':id')
  @ApiTags('acquire')
  @ApiQuery({
    name: 'schema',
    enum: ApplicationSchema,
  })
  @ApiQuery({
    name: 'format',
    enum: ApplicationFormat,
  })
  @ApiQuery({
    name: 'template',
    enum: ApplicationTemplate,
    example: ApplicationTemplate.TC103,
  })
  async findOne(
    @Param('id') id: number,
    @Query('schema') schema: ApplicationSchema,
    @Query('format') format: ApplicationFormat,
    @Query('template') template: ApplicationTemplate = ApplicationTemplate.TC103
  ) {
    if (schema !== ApplicationSchema.TC103) {
      throw new UnsupportedMediaTypeException(
        'Switch the Schema query to TC103,currently selected version is unavailable'
      );
    }
    const applicationRas: ApplicationRas =
      await this.applicationsService.findOne(+id);

    if (!applicationRas) {
      throw new NotFoundException(`Application ${id} not found.`);
    }

    const templatePath = `src/templates/${template}.ejs`;
    try {
      const applicationRasInputJson: ApplicationRasInputJson = JSON.parse(
        applicationRas?.raw_input_json
      );
      console.log('bbbbbbbbbb');
      const rendered: string = await compile(
        applicationRasInputJson,
        {},
        templatePath,
        id
      );
      if (format === ApplicationFormat.JSON) {
        return fromXML(rendered);
      } else {
        return rendered;
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message, error.name);
    }
  }

  // GET /api/v1/applications/:id/validate
  @Get(':id/validate')
  validate(@Param('id') id: string) {
    return this.applicationsService.validate(+id);
  }

  // POST /api/v1/applications/:id/transmit?destination=https://client.com/submissions&format=soap
  @Get(':id/transmit')
  transmit(
    @Param('id') id: string,
    @Query('format')
    format: ApplicationTransmissionFormat = ApplicationTransmissionFormat.HTTPS
  ) {
    return this.applicationsService.transmit(+id, format);
  }
}
