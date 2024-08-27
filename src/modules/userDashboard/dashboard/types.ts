export interface RecentActivityType {
    description: string;
    time: string;
  }
  
  export interface NotificationType {
    message: string;
    time: string;
  }
  
  export interface DashboardData {
    totalBookings: number;
    pendingPayments: number;
    totalSpendings: number;
    recentActivities: RecentActivityType[];
    notifications: NotificationType[];
  }