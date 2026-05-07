resource "aws_elasticache_cluster" "accordai_redis" {
  cluster_id           = "accordai-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  port                 = 6379
}
