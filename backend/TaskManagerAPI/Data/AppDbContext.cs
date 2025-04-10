﻿using TaskManagerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TaskManagerAPI.Data;

   public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<TaskItem> Tasks { get; set; }
    }

