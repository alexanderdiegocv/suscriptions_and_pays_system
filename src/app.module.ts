// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from '@liaoliaots/nestjs-redis';

// Importar módulos.
import { UsersModule } from './modules/users/users.module';
import { PlansModule } from './modules/plans/plans.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Variables de entorno.
    RedisModule.forRoot({
      config: { host: process.env.REDIS_HOST, port: parseInt(process.env.REDIS_PORT, 10) },
    }),
    UsersModule,
    PlansModule,
    SubscriptionsModule,
    PaymentsModule,
    TasksModule,
    NotificationsModule,
  ],
})
export class AppModule {}