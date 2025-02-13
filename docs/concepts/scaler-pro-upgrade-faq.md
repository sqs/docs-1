---
title: 'Upgrading to Scaler Pro - FAQ'
subtitle: 'Frequently asked questions about upgrading to Scaler Pro.'
date: '2024-02-20'
---

## Overview

PlanetScale is deprecating the Scaler plan. [Please read our blog post here to learn more](/blog/deprecating-the-scaler-plan).

All existing Scaler plan customers will need to upgrade their database to Scaler Pro by April 8, 2024. If they are not upgraded by April 8th, we will automatically
migrate any remaining databases to Scaler Pro.

- [How do I select a Scaler Pro cluster size?](#how-do-i-select-a-scaler-pro-cluster-size-)
- [Does Scaler Pro include autoscaling?](#does-scaler-pro-include-autoscaling-)
- [How is storage billed for Scaler Pro?](#how-is-storage-billed-for-scaler-pro-)
- [Is Scaler Pro PS-10 less powerful than Scaler?](#is-scaler-pro-ps-10-less-powerful-than-scaler-)
- [What are replicas used for?](#what-are-replicas-used-for-)
- [What if I used multiple production branches in my Scaler database?](#what-if-i-used-multiple-production-branches-in-my-scaler-database-)
- [What changes with read-only regions?](#what-changes-with-read-only-regions-)
- [How do I know when to scale up my cluster size?](#how-do-i-know-when-to-scale-up-my-cluster-size-)
- [How do development branches work on Scaler Pro?](#how-do-development-branches-work-on-scaler-pro-)
- [What changes with PlanetScale Boost?](#what-changes-with-planetscale-boost-)

## How do I select a Scaler Pro cluster size?

When upgrading to Scaler Pro, the UI will show a _recommended_ cluster size for your database. This is based on the current resources your database has been using on the Scaler plan.

For most users, this will be a [PS-10 cluster size](/docs/concepts/planetscale-plans#scaler-pro).

Scaler databases, by default, used a cluster size similar to a PS-10. In rare cases, databases may be on a PS-20 or higher.

Once you select the size and submit the change, the adjustment will be made immediately and without downtime. You will be able to see your databases infrastructure update on the dashboard page.

## Does Scaler Pro include autoscaling?

The short answer is no, we do not currently offer full autoscaling for our Scaler or Scaler Pro plans.

Both the Scaler and Scaler Pro plans autoscale storage as the database grows. We do not automatically adjust the CPU or memory resources for you.

Autoscaling cluster sizes for Scaler Pro may be a feature we add in the future.

This is a complex topic, and our team has [deep experience scaling databases for the world's largest applications](https://planetscale.com/media/databases-at-scale). We built Scaler Pro to provide the critical data
and tooling to enable you to make these decisions without having to fully rely on our support team.

Scaler Pro comes with the ability to scale up and down on demand without downtime, all with cutting-edge resiliency and availability features.

Our aim is to be transparent with you about what resources are running, how your queries are impacting your database and giving you full control over adjusting the resources available.

With the Scaler plan, the size of the cluster was abstracted away from you. One important reason that we are deprecating the Scaler plan is due to the challenges around this. We've found that it is better to be fully transparent with the resources
that are running for a database and how queries are impacting it. Not all database performance problems can be solved by increasing resources.

Even though we are not autoscaling your database, we are always monitoring and have systems in place that help our support team notify customers
when we notice an issue. For customers who want a higher level of support, we also provide elevated support plans with
faster response times and access to our team of experts.

## How is storage billed for Scaler Pro?

Both plans have 10GB of storage included.

For Scaler, storage was billed at $2.50/GB. On Scaler Pro, storage is $1.50/GB.

This rate includes all storage used by replicas in your primary region.

## Is Scaler Pro PS-10 less powerful than Scaler?

No, Scaler Pro is more powerful than Scaler. By default Scaler databases are on a cluster size similar to PS-10.

Scaler production branches have a single replica. Scaler Pro has two replicas distributed in different availability zones.

In rare cases, there are Scaler databases using more resources than a PS-10. When upgrading your database, in the UI you will see a cluster size highlighted in blue and say "recommended". This size will always be similar to the existing
resources used by your database.

## What are replicas used for?

All Scaler Pro production branches include [two replicas](/docs/concepts/replicas). These are for improving resiliency and distributing read queries.

Replicas are also used for automatic failovers. In the event there is an issue with the primary in your database, PlanetScale will automatically failover to one of the running replicas.

Each replica is run in a separate availability zone (AZ). Think of each AZ as a separate building within the region. If there is an issue with one (such as power loss), your database will continue to be available.

By default, all read queries are sent to the primary. You [may optionally have them served by your replicas](/docs/concepts/replicas#how-to-query-replicas) to reduce load on the primary.

## What if I used multiple production branches in my Scaler database?

The Scaler plan allowed for two production branches at a time. In Scaler Pro, each production branch is individually billed for the time the branch is running.

If you would like to setup a "staging" or "preview" branch for your database to test schema changes. We recommend [using a development branch and enabling safe migrations](/docs/concepts/safe-migrations#staging-branches).

## What changes with read-only regions?

On the Scaler plan, read-only regions were billed by the rows read plus $2.50/GiB for storage.

For Scaler Pro, each read-only region has a flat rate (40% the cost of the production branch) and storage is $1.50/GiB.

## How do I know when to scale up my cluster size?

If your database is consistently using 70% or higher of the available CPU, we recommend moving up to a larger cluster size.

Cluster size changes happen quickly and without downtime. You will see a status indicator in on the dashboard when an upgrade is occuring.

## How do development branches work on Scaler Pro?

On the Scaler plan, each database had a limit of 5 development branches at a time.

With Scaler Pro, each database has 1,440 hours of development branch time included. Anything over that time is billed at ~$0.014 per hour. All branches are only billed for the time that they are used, prorated to the second.

[Learn more about development branch billing](/docs/concepts/billing#development-branches).

## What changes with PlanetScale Boost?

There are no billing changes for PlanetScale Boost when upgrading to Scaler Pro.
