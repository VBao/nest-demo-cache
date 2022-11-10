import { Test, TestingModule } from '@nestjs/testing';
import { PrincipalsController } from './principals.controller';

describe('PrincipalsController', () => {
  let controller: PrincipalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrincipalsController],
    }).compile();

    controller = module.get<PrincipalsController>(PrincipalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
